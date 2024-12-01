package com.fatec.loja.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.loja.Model.Cliente;
import com.fatec.loja.Repository.ClienteRepository;

@CrossOrigin(origins = "*")
@RestController
public class ClienteController {
    @Autowired
    ClienteRepository bd;

    @PostMapping("/api/cliente")
    public ResponseEntity<String> gravar(@RequestBody Cliente obj) {
    if (bd.verificacaoEmail(obj.getEmail()).isPresent()) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email já cadastrado!");
    }

    // Verificar CPF se for necessário
    Optional<Cliente> clienteExistentePorCPF = bd.findByCpf(obj.getCpf());
    if (clienteExistentePorCPF.isPresent()) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("CPF já cadastrado!");
    }

    bd.save(obj);
    return ResponseEntity.ok("Cliente cadastrado com sucesso!");
}
    

    @PutMapping("/api/cliente")
    public void alterar(@RequestBody Cliente obj){
        bd.save(obj);

    }

    @GetMapping("/api/cliente/{codigo}")
    public Cliente carregar(@PathVariable int codigo){
        Optional<Cliente> obj = bd.findById(codigo);
        if(obj.isPresent()){
            return obj.get();
        } else {
            return null;
        }
    }

    @DeleteMapping("/api/cliente/{codigo}")
    public void remover(@PathVariable int codigo){
        bd.deleteById(codigo);
       
    }

    @GetMapping("/api/clientes")
    public List<Cliente> listar(){
        return bd.findAll();
    }

    @PostMapping("/api/cliente/login")
    public Cliente fazerLogin(@RequestBody Cliente obj){
        Optional<Cliente> retorno = 
            bd.login(obj.getEmail(), obj.getSenha());
        if(retorno.isPresent()){
            return retorno.get();
        } else {
            return null;
        }
    }


   @PostMapping("/api/cliente/recupera")
    public ResponseEntity<?> recuperarSenha(@RequestBody Cliente obj) {
        Optional<Cliente> retorno = bd.esqueciSenha(obj.getEmail());
        if (retorno.isPresent()) {
            String token = UUID.randomUUID().toString();
            Map<String, String> resposta = new HashMap<>();
            resposta.put("mensagem", "E-mail encontrado. Use o token para redefinir.");
            resposta.put("token", token);
            return ResponseEntity.ok(resposta);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("mensagem", "E-mail não encontrado."));
        }
    }

    @PostMapping("/api/cliente/redefinir")
    public ResponseEntity<?> redefinirSenha(@RequestBody Map<String, String> dados) {
        String email = dados.get("email");
        String novaSenha = dados.get("novaSenha");
        String token = dados.get("token");

        if (token == null || token.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("mensagem", "Token inválido."));
        }

        Optional<Cliente> retorno = bd.esqueciSenha(email);
        if (retorno.isPresent()) {
            Cliente cliente = retorno.get();
            if (cliente.getSenha().equals(novaSenha)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("mensagem", "A nova senha não pode ser a mesma que a atual."));
            }
            cliente.setSenha(novaSenha);
            bd.save(cliente);
            return ResponseEntity.ok(Map.of("mensagem", "Senha redefinida com sucesso."));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("mensagem", "E-mail não encontrado."));
        }
    }

    @GetMapping("/api/cliente/verificar-email/{email}")
    public boolean verificarEmail(@PathVariable String email) {
        Optional<Cliente> cliente = bd.verificacaoEmail(email);
        return cliente.isPresent(); 
    }




}
