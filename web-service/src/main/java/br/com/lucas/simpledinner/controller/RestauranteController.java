package br.com.lucas.simpledinner.controller;

import br.com.lucas.simpledinner.model.Restaurante;
import br.com.lucas.simpledinner.repository.RestauranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("restaurantes")
public class RestauranteController {

    @Autowired
    RestauranteRepository restauranteRepository;

    @RequestMapping(value="/salvar" ,  method = RequestMethod.POST)
    public ResponseEntity<?> salvar(@RequestBody Restaurante restaurante) {
        return new ResponseEntity<>
                (restauranteRepository.save(restaurante),
                HttpStatus.CREATED);
    }

    @RequestMapping(value="/editar/{id}" ,  method = RequestMethod.POST)
    public ResponseEntity editar(@PathVariable("id") long id,
                                 @RequestBody Restaurante restaurante) {
        return restauranteRepository.findById(id)
                .map(item -> {
                    item.setDescricao(restaurante.getDescricao());
                    Restaurante editado = restauranteRepository.save(item);
                    return ResponseEntity.ok().body(editado);
                }).orElse(ResponseEntity.notFound().build());
    }

    @RequestMapping(value = "/excluir/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> excluir(@PathVariable long id) {
        return restauranteRepository.findById(id)
                .map(record -> {
                    restauranteRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<Restaurante> consultar(){
        return restauranteRepository.findAll();
    }

    @RequestMapping(value = "/{descricao}", method = RequestMethod.GET)
    public ResponseEntity<?> consultarPorDescricao(@PathVariable String descricao) {
        return restauranteRepository.getByDescricao(descricao)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
