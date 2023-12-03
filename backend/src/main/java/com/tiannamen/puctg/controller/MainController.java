package com.tiannamen.puctg.controller;

import com.tiannamen.puctg.model.dto.GameDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api")
public class MainController {
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);
    private List<GameDTO> pseudoDatabase = new ArrayList<>();

    public MainController() {
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<GameDTO> save(@RequestBody GameDTO gameDTO) {
        pseudoDatabase.add(gameDTO);
        return ResponseEntity.created((URI) null).body(gameDTO);
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<GameDTO>> getSavedGames() {
        return ResponseEntity.ok(pseudoDatabase);
    }

    @GetMapping("/freeGames")
    @CrossOrigin
    public ResponseEntity<String> getAllFreeGames() throws IOException {
        URL url = new URL("https://www.freetogame.com/api/games ");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        int status = con.getResponseCode();
        if (status == 200) {
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

        return ResponseEntity.internalServerError().body("Failed to connect to freetogame.com");
    }
}
