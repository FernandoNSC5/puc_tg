package com.tiannamen.puctg.model.dto;

public class GameDTOBuilder {
    private String id;
    private String name;
    private String complement;
    private String status;

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

    public GameDTO build() {
        return new GameDTO(id, name, complement, status);
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
