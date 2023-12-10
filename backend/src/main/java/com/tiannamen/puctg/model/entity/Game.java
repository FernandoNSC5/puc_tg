package com.tiannamen.puctg.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@EnableAutoConfiguration
@Table(name = "games")
public class Game {

    public static GameBuilder builder() {
        return new GameBuilder();
    }

    @Id
    @Column(unique = true, name = "game_id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "thumbnail")
    private String thumbnail;

    @Column(name = "short_description")
    private String shortDescription;

    @Column(name = "genre")
    private String genre;

    @Column(name = "platform")
    private String platform;

    @Column(name = "developer")
    private String developer;

    @Column(name = "publisher")
    private String publisher;

    @Column(name = "releaseDate")
    private String releaseDate;

    @Column(name = "completed")
    private Boolean completed = false;

}
