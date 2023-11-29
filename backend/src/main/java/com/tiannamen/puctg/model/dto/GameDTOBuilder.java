package com.tiannamen.puctg.model.dto;

import org.springframework.core.io.ByteArrayResource;

public class GameDTOBuilder {
    private String id;
    private String name;
    private String complement;
    private String status;
    private byte[] byteArray;

    public GameDTOBuilder() {}

    public GameDTOBuilder id(String id) {
        this.id = id;
        return this;
    }

    public GameDTOBuilder name(String name) {
        this.name = name;
        return this;
    }

    public GameDTOBuilder complement(String complement) {
        this.complement = complement;
        return this;
    }

    public GameDTOBuilder status(String status) {
        this.status = status;
        return this;
    }
    public GameDTOBuilder byteArray(byte[] byteArray) {
        this.byteArray = byteArray;
        return this;
    }

    public GameDTO build() {
        return new GameDTO(id, name, complement, status, byteArray);
    }

    @Override
    public String toString() {
        return "GameDTOBuilder{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", complement='" + complement + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
