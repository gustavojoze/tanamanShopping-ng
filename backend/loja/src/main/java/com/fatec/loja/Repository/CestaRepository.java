package com.fatec.loja.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fatec.loja.Model.Cesta;

@Repository
public interface CestaRepository 
extends JpaRepository<Cesta, Integer>{

}
