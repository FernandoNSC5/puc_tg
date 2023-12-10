package com.tiannamen.puctg.repository;

import com.tiannamen.puctg.model.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
