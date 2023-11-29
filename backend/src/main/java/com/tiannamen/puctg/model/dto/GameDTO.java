package com.tiannamen.puctg.model.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.core.io.ByteArrayResource;

@Setter
@Getter
public class GameDTO {

    private String id;

    private String name;

    private String complement;

    private String status;

    private ByteArrayResource byteArrayResource;

    private byte[] byteArray;

    public static GameDTOBuilder builder() {
        return new GameDTOBuilder();
    }

    public GameDTO(String id, String name, String complement, String status, byte[] byteArray) {
        this.id = id;
        this.name = name;
        this.complement = complement;
        this.status = status;
        this.byteArray = byteArray;
    }
}
