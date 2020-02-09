package br.com.lucas.simpledinner.controller;

import br.com.lucas.simpledinner.model.Prato;
import br.com.lucas.simpledinner.repository.PratoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("pratos")
public class PratoController {

    @Autowired
    PratoRepository pratoRepository;

    @RequestMapping(value="/salvar" ,  method = RequestMethod.POST)
    public ResponseEntity<?> salvar(@RequestBody Prato prato) {
        return new ResponseEntity<>
                (pratoRepository.save(prato),
                        HttpStatus.CREATED);
    }

    @RequestMapping(value="/editar/{id}" ,  method = RequestMethod.POST)
    public ResponseEntity editar(@PathVariable("id") long id,
                                 @RequestBody Prato prato) {
        return pratoRepository.findById(id)
                .map(item -> {
                    item.setDescricao(prato.getDescricao());
                    item.setRestaurante(prato.getRestaurante());
                    item.setValor(prato.getValor());
                    Prato editado = pratoRepository.save(item);
                    return ResponseEntity.ok().body(editado);
                }).orElse(ResponseEntity.notFound().build());
    }

    @RequestMapping(value = "/excluir/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> excluir(@PathVariable long id) {
        return pratoRepository.findById(id)
                .map(record -> {
                    pratoRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<Prato> consultar(){
        return pratoRepository.findAll();
    }

    @RequestMapping(value = "/{descricao}", method = RequestMethod.GET)
    public ResponseEntity<?> consultarPorDescricao(@PathVariable String descricao) {
        return pratoRepository.getByDescricao(descricao)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
