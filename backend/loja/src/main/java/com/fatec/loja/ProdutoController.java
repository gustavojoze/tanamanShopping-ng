package com.fatec.loja;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ProdutoController {
    @Autowired
    ProdutoRepository bd;

    @PostMapping("/api/produto")
    public void gravar(@RequestBody Produto obj){
        bd.save(obj);
    }

    @PutMapping("/api/produto")
    public void alterar(@RequestBody Produto obj){
        bd.save(obj);
      }

    @GetMapping("/api/produto/{codigo}")
    public Produto carregar(@PathVariable int codigo){
        Optional<Produto> obj = bd.findById(codigo);
        if(obj.isPresent()){
            return obj.get();
        } else {
            return null;
        }
    }

    @DeleteMapping("/api/produto/{codigo}")
    public void remover(@PathVariable int codigo){
        bd.deleteById(codigo);
     }

    @GetMapping("/api/produtos")
    public List<Produto> listar(){
       return bd.findAll();
    }

    @GetMapping("/api/produto/vitrine")
    public List<Produto> carregarVitrine(){
       return bd.buscarVitrine();
    }

    @GetMapping("/api/produto/busca/{pesquisa}")
    public List<Produto> buscar(@PathVariable String pesquisa){
       return bd.busca('%'+ pesquisa +'%');
    }


}
