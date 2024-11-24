package com.fatec.loja.Model;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
@Entity
public class Cesta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    @Transient
    private Cliente cliente;
    private int codigoCliente;
    private double total = 0;
    @Transient
    private Set<Item> itens;


    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public int getCodigo() {
        return codigo;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
        this.codigoCliente = cliente.getCodigo();
    }
    public Cliente getCliente() {
        return cliente;
    }
    
    public void setCodigoCliente() {
        this.codigoCliente = this.cliente.getCodigo();
    }
    public int getCodigoCliente() {
        return codigoCliente;
    }
    
    public void setTotal(double total) {
        this.total = total;
    }
    public double getTotal() {
        return total;
    }
    
    
    public void setItens(Set<Item> itens) {
        this.itens = itens;
    }
    public Set<Item> getItens() {
        return itens;
    }
  

    
}
