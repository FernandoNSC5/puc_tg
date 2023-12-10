package com.tiannamen.puctg.service;

import com.tiannamen.puctg.mapper.GameMapper;
import com.tiannamen.puctg.model.dto.GameDTO;
import com.tiannamen.puctg.model.entity.Game;
import com.tiannamen.puctg.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public GameDTO saveGame(GameDTO gameDTO) {
        Game game = GameMapper.toGame(gameDTO);
        gameRepository.save(game);
        return gameDTO;
    }

    public GameDTO findById(Long id) {
        Optional<Game> game = gameRepository.findById(id);
        if (game.isPresent()) {
            return GameMapper.toGameDTO(game.get());
        }
        return new GameDTO();
    }

    public List<GameDTO> findAllRegisteredGames() {
        return GameMapper.toGameDTOList(gameRepository.findAll());
    }

}
