package com.fatec.loja.Controller;
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

import com.fatec.loja.Model.Item;
import com.fatec.loja.Repository.ItemRepository;

@RestController
@CrossOrigin(origins = "*")
public class ItemController {
    @Autowired
    ItemRepository bd;

    @PostMapping("/api/item")
    public void gravar(@RequestBody Item obj){
        bd.save(obj);
      }


      @PostMapping("/api/itensCesta")
    public void gravarLista(@RequestBody List<Item> obj){
        bd.saveAll(obj);
      }


    @PutMapping("/api/item")
    public void alterar(@RequestBody Item obj){
        bd.save(obj);
    }

    @GetMapping("/api/item/{codigo}")
    public Item carregar(@PathVariable int codigo){
       Optional<Item> obj = bd.findById(codigo);
        if(obj.isPresent()){
           return obj.get();
        } else {
            return null;
        }
    }

    @DeleteMapping("/api/item/{codigo}")
    public void remover(@PathVariable int codigo){
        bd.deleteById(codigo);
    }

    @GetMapping("/api/itens")
    public List<Item> listar(){
       return bd.findAll();
    }
}
