package com.tiannamen.puctg.mapper;

import com.tiannamen.puctg.model.dto.GameDTO;
import com.tiannamen.puctg.model.entity.Game;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.List;

@NoArgsConstructor
public class GameMapper {

    public static List<GameDTO> toGameDTOList(Collection<Game> gameList) {
        return gameList.stream().map(GameMapper::toGameDTO).toList();
    }

    public static List<Game> toGameList(Collection<GameDTO> gameList) {
        return gameList.stream().map(GameMapper::toGame).toList();
    }

    public static Game toGame(GameDTO gameDTO) {
        return Game.builder()
                .id(gameDTO.getFreeGameId())
                .title(gameDTO.getTitle())
                .thumbnail(gameDTO.getThumbnail())
                .shortDescription(gameDTO.getShortDescription())
                .genre(gameDTO.getGenre())
                .platform(gameDTO.getPlatform())
                .developer(gameDTO.getDeveloper())
                .publisher(gameDTO.getPublisher())
                .releaseDate(gameDTO.getReleaseDate())
                .completed(gameDTO.getIsCompleted())
                .build();
    }

    public static GameDTO toGameDTO(Game game) {
        return GameDTO.builder().
                freeGameId(game.getId())
                .title(game.getTitle())
                .thumbnail(game.getThumbnail())
                .shortDescription(game.getShortDescription())
                .genre(game.getGenre())
                .platform(game.getPlatform())
                .developer(game.getDeveloper())
                .publisher(game.getPublisher())
                .releaseData(game.getReleaseDate())
                .isCompleted(game.getCompleted())
                .build();
    }

}
