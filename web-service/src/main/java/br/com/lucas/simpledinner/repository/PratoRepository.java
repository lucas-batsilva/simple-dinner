package br.com.lucas.simpledinner.repository;

import br.com.lucas.simpledinner.model.Prato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PratoRepository extends JpaRepository<Prato, Long> {
    public Optional<Prato> getByDescricao(String descricao);
}
