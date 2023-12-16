package com.tiannamen.puctg.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
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

    private Boolean isCompleted;

    public static GameDTOBuilder builder() {return new GameDTOBuilder();}
}
