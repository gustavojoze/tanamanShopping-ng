package com.fatec.loja;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    private String nome;
    private String descricao;
    private String valor;
    private String quantidade;
    private String keywords;
    private int destaque = 0;
    
    public int getDestaque() {
        return destaque;
    }
    public void setDestaque(int destaque) {
        this.destaque = destaque;
    }
    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public String getValor() {
        return valor;
    }
    public void setValor(String valor) {
        this.valor = valor;
    }
    public String getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(String quantidade) {
        this.quantidade = quantidade;
    }
    public String getKeywords() {
        return keywords;
    }
    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    
}
