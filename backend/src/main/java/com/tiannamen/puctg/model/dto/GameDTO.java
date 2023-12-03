package com.tiannamen.puctg.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class GameDTO {

    private Long freeGameId;

    private String title;

    private String thumbnail;

    private String shortDescription;

    private String genre;

    private String platform;

    private String developer;

    private String publisher;

    private String releaseDate;

    private boolean isCompleted;

    public static GameDTOBuilder builder() {return new GameDTOBuilder();}
}
