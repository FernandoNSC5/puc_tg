package com.tiannamen.puctg.controller;

import com.tiannamen.puctg.model.dto.GameDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api")
public class MainController {
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    public MainController() {
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<GameDTO>> getAllGames() {
        GameDTO gameDTO = GameDTO.builder()
                .id("andID")
                .status("playing")
                .name("The legend of zelda")
                .complement("Breath of the wild")
                .build();
        GameDTO gameDTO2 = GameDTO.builder()
                .id("andID")
                .status("playing")
                .name("The legend of zelda")
                .complement("Tears of the Kingdom")
                .build();
        List<GameDTO> gameList = new ArrayList<>();
        gameList.add(gameDTO);
        gameList.add(gameDTO2);
        return ResponseEntity.ok(gameList);
    }
}
