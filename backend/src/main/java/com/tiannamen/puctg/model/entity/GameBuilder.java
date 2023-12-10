package com.tiannamen.puctg.model.entity;

import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@ToString
public class GameBuilder {

    public Long id;
    public String title;
    public String thumbnail;
    public String shortDescription;
    public String genre;
    public String platform;
    public String developer;
    public String publisher;
    public String releaseDate;
    public Boolean completed;

    public GameBuilder id(final Long id) {
        this.id = id;
        return this;
    }

    public GameBuilder title(final String title) {
        this.title = title;
        return this;
    }

    public GameBuilder thumbnail(final String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }

    public GameBuilder shortDescription(final String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }

    public GameBuilder genre(final String genre) {
        this.genre = genre;
        return this;
    }

    public GameBuilder platform(final String platform) {
        this.platform = platform;
        return this;
    }

    public GameBuilder developer(final String developer) {
        this.developer = developer;
        return this;
    }

    public GameBuilder publisher(final String publisher) {
        this.publisher = publisher;
        return this;
    }

    public GameBuilder releaseDate(final String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }

    public GameBuilder completed(final Boolean completed) {
        this.completed = completed;
        return this;
    }

    public Game build() {
        return new Game(
                this.id,
                this.title,
                this.thumbnail,
                this.shortDescription,
                this.genre,
                this.platform,
                this.developer,
                this.publisher,
                this.releaseDate,
                this.completed
        );
    }

}
