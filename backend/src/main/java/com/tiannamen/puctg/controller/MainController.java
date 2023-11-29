package com.tiannamen.puctg.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.tiannamen.puctg.model.dto.GameDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
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
    public ResponseEntity<List<GameDTO>> getAllGames() throws IOException{
        final ByteArrayResource inputStream = new ByteArrayResource(Files.readAllBytes(Paths.get(
                "/home/tiannamen/Documents/gitviews/puc_tg/backend/src/main/java/com/tiannamen/puctg/defaultImage.jpg"
        )));
        GameDTO gameDTO = GameDTO.builder()
                .id("andID")
                .status("playing")
                .name("The legend of zelda")
                .complement("Breath of the wild")
                .byteArray(inputStream.getByteArray())
                .build();
        GameDTO gameDTO2 = GameDTO.builder()
                .id("andID")
                .status("playing")
                .name("The legend of zelda")
                .complement("Tears of the Kingdom")
                .byteArray(inputStream.getByteArray())
                .build();
        List<GameDTO> gameList = new ArrayList<>();
        gameList.add(gameDTO);
        gameList.add(gameDTO2);
        System.out.println("Responding " + gameList.toString());
        return ResponseEntity.ok(gameList);
    }

    @GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> image() throws IOException {
        final ByteArrayResource inputStream = new ByteArrayResource(Files.readAllBytes(Paths.get(
                "/home/tiannamen/Documents/gitviews/puc_tg/backend/src/main/java/com/tiannamen/puctg/defaultImage.jpg"
        )));
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentLength(inputStream.contentLength())
                .body(inputStream);
    }
}
