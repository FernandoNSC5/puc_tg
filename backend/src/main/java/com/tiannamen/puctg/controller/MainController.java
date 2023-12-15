package com.tiannamen.puctg.controller;

import com.tiannamen.puctg.model.dto.GameDTO;
import com.tiannamen.puctg.model.dto.GameSimplifiedDTO;
import com.tiannamen.puctg.service.GameService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.util.List;


@RestController
@RequestMapping("/api")
public class MainController {
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    @Autowired
    private GameService gameService;

    public MainController() {
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<GameDTO> save(@RequestBody GameDTO gameDTO) {
        try {
            logger.info("Saving game {}", gameDTO.getTitle());
            gameService.saveGame(gameDTO);
            return ResponseEntity.created((URI) null).body(gameDTO);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<GameDTO>> getSavedGames() {
        logger.info("Retrieving all games from database");
        return ResponseEntity.ok(gameService.findAllRegisteredGames());
    }

    @DeleteMapping
    @CrossOrigin
    public ResponseEntity<GameDTO> deleteGame(@RequestBody GameSimplifiedDTO simplifiedDTO) {
        try {
            logger.info("Deleting game id {}", simplifiedDTO.getFreeGameId());
            gameService.deleteGame(simplifiedDTO);
            return ResponseEntity.ok(null);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @PatchMapping
    @CrossOrigin
    public ResponseEntity<GameDTO> updateGame(@RequestBody GameDTO gameDTO) {
        try {
            logger.info("Updating game {}", gameDTO.getTitle());
            gameService.patchGame(gameDTO);
            return ResponseEntity.ok(null);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @GetMapping("/freeGames")
    @CrossOrigin
    public ResponseEntity<String> getAllFreeGames() throws IOException {
        logger.info("Requesting from freegame...");
        URL url = new URL("https://www.freetogame.com/api/games ");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        int status = con.getResponseCode();
        if (status == 200) {
            logger.info("Freegame ok");
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();
            return ResponseEntity.ok(content.toString());
        }

        logger.info("Something went wrong processing Freegame data");
        return ResponseEntity.internalServerError().body("Failed to connect to freetogame.com");
    }
}
