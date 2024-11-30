package com.fatec.loja.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fatec.loja.Model.Item;

@Repository
public interface ItemRepository extends
JpaRepository<Item,Integer> {

}
