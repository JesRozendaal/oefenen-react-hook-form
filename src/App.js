import React from 'react';
import './App.css';
import {useForm} from "react-hook-form";

function App() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const selectedReferrer = watch('found-through');

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
        id="details-name"
        {...register("name", {
            required: "Naam mag niet leeg zijn",
        })}
        />
        </label>
              {errors.name && <p>{errors.name.message}</p>}

              <label htmlFor="details-age">
                  Leeftijd:
                  <input
                      type="number"
                      id="details-age"
                      {...register("age", {
                          max: {
                              value: 80,
                              message: "U mag maximaal 80 jaar oud zijn",
                          }
                      })}
                      />
              </label>
              {errors.age && <p>{errors.age.message}</p>}
          </fieldset>

          <fieldset>
              <legend>Jouw review</legend>

              <label htmlFor="recipe-comments">
                  Opmerkingen:
                  <textarea
                      {...register("comments", {
                          required: true,
                          maxLength: {
                              value: 50,
                              message: "Er mogen maximaal 50 karakters gebruikt worden",
                          },
                      })}
                      id="recipe-comments"
                      rows="4"
                      cols="40"
                      placeholder="Wat vond je van het recept?"
                      >
                      </textarea>
              </label>
              {errors.comments && <p>{errors.comments.message}</p>}

<label htmlFor="recipe-newsletter">
    <input
        type="checkbox"
        {...register("newsletter")}
        />
    Ik schrijf me in voor de nieuwsbrief
</label>

              <label htmlFor="referrer">
                  Hoe heb je dit recept gevonden?
                  <select id="referrer" {...register("found-through")} >
                      <option value="google">Google</option>
                      <option value="friend">Vriend</option>
                      <option value="advertisement">Advertentie</option>
                      <option value="other">Anders</option>
                  </select>
              </label>

              {selectedReferrer === "other" &&
              <input
                  type="text"
                  {...register("found-through-anders")}
              />
              }

              <button type="submit">
                  Versturen
              </button>
          </fieldset>
      </form>
  );
}

export default App;
