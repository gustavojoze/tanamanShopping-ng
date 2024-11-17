package com.fatec.loja.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fatec.loja.Model.Produto;

@Repository
public interface ProdutoRepository extends
JpaRepository<Produto, Integer>{
    @Query(value = "select * from produto where destaque>0 order by destaque", nativeQuery = true)
    List<Produto> buscarVitrine();

    @Query(value = "select * from produto where keywords like ?1 order by nome", nativeQuery = true)
    List<Produto> busca(String pesquisa);
}
