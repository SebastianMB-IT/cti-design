import React from "react";

export const Checkbox = (props) => {
    return (
        <div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Ordina per:</h3>
            <fieldset>
            <legend class="sr-only">
            </legend>

            <div class="flex items-center mb-4">
                <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked />
                <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
                Nome
                </label>
            </div>
            <div class="flex items-center mb-4">
                <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked />
                <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
                Stato
                </label>
            </div>
            <div class="flex items-center mb-4">
                <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked />
                <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
                Interno
                </label>
            </div>
        </fieldset>
        </div>
    );
}
