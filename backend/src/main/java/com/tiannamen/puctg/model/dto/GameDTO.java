package com.tiannamen.puctg.model.dto;

public class GameDTO {

    private String id;

    private String name;

    private String complement;

    private String status;

    public static GameDTOBuilder builder() {
        return new GameDTOBuilder();
    }

    public GameDTO(String id, String name, String complement, String status) {
        this.id = id;
        this.name = name;
        this.complement = complement;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
