/**
 * • Nom
 * • Modèle : Ne peut contenir que des chiffres et des lettres.
 * • Marque : 20 caractères maximum, uniquement des lettres.
 * • Puissance : Maximum de 22 kW, minimum de 5 kW.
 * • Statut : Peut être AVAILABLE ou CHARGING.
 */
export interface ChargingStation {
  name: string;
  // 20 char, letters
  brand: string;
  // alnum
  model: string;
  // Power : Max of 22 kW, min of 5 kW.
  power: number;
  inUse: boolean;
}

// Monad for convenience
export type Maybe<T = any> = T | null | undefined;
