package com.tiannamen.puctg.model.dto;

public class GameDTOBuilder {

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

    public GameDTOBuilder() {};

    public GameDTOBuilder title(String title) {
        this.title = title;
        return this;
    }

    public GameDTOBuilder freeGameId(Long freeGameId) {
        this.freeGameId = freeGameId;
        return this;
    }

    public GameDTOBuilder thumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }

    public GameDTOBuilder shortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }

    public GameDTOBuilder genre(String genre) {
        this.genre = genre;
        return this;
    }

    public GameDTOBuilder platform(String platform) {
        this.platform = platform;
        return this;
    }

    public GameDTOBuilder developer(String developer) {
        this.developer = developer;
        return this;
    }

    public GameDTOBuilder publisher(String publisher) {
        this.publisher = publisher;
        return this;
    }

    public GameDTOBuilder releaseData(String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }

    public GameDTOBuilder isCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
        return this;
    }

    public GameDTO build() {
        return new GameDTO(
                freeGameId,
                title,
                thumbnail,
                shortDescription,
                genre,
                platform,
                developer,
                publisher,
                releaseDate,
                isCompleted
        );
    }

    @Override
    public String toString() {
        return "GameDTOBuilder{" +
                "freeGameId=" + freeGameId +
                ", title='" + title + '\'' +
                ", thumbnail='" + thumbnail + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", genre='" + genre + '\'' +
                ", platform='" + platform + '\'' +
                ", developer='" + developer + '\'' +
                ", publisher='" + publisher + '\'' +
                ", releaseDate='" + releaseDate + '\'' +
                '}';
    }
}
