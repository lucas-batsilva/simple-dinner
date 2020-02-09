package br.com.lucas.simpledinner.repository;

import br.com.lucas.simpledinner.model.Restaurante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RestauranteRepository extends JpaRepository<Restaurante, Long> {

    public Optional<Restaurante> getById(Long id);

    public Optional<Restaurante> getByDescricao(String descricao);
}
