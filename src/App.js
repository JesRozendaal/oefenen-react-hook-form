import React from 'react';
import './App.css';
import {useForm} from "react-hook-form";

function App() {
    const {register, handleSubmit} = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
          <fieldset>
              <legend>Gegevens</legend>

<label htmlFor="details-name">
    Naam:
    <input
        type="text"
        name="name"
        id="details-name"
        {...register("name")}
        />
        </label>

              <label htmlFor="details-age">
                  Leeftijd:
                  <input
                      type="text"
                      name="name"
                      id="details-age"
                      {...register("age")}
                      />
              </label>
          </fieldset>

          <fieldset>
              <legend>Jouw review</legend>

              <label htmlFor="recipe-comments">
                  Opmerkingen:
                  <textarea
                      {...register("comments")}
                      id="recipe-comments"
                      rows="4"
                      cols="40"
                      placeholder="Wat vond je van het recept?"
                      >
                      </textarea>
              </label>

<label htmlFor="recipe-newsletter">
    <input
        type="checkbox"
        {...register("newsletter")}
        />
    Ik schrijf me in voor de nieuwsbrief
</label>

              <button type="submit">
                  Versturen
              </button>
          </fieldset>
      </form>
  );
}

export default App;
