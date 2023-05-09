/**
 * Commonly shared Interfaces & Enums 
 */

export interface IPokemon {
    name: string
    id: number
}

export interface IPokemons {
    [key: string]: IPokemon
}

export interface PokemonProps {
    id: number,
    name: string,
    style: object
}

export interface ISinglePokemon {
        id: "string",
        formId: "string",
        dexNr: 1,
        generation: 0,
        names: {
          English: "string",
          German: "string",
          French: "string",
          Italian: "string",
          Japanese: "string",
          Korean: "string",
          Spanish: "string"
        },
        stats: {
          stamina: 0,
          attack: 0,
          defense: 0
        },
        primaryType: {
          type: "string",
          names: {
            English: "string",
            German: "string",
            French: "string",
            Italian: "string",
            Japanese: "string",
            Korean: "string",
            Spanish: "string"
          }
        },
        secondaryType: {
          type: "string",
          names: {
            English: "string",
            German: "string",
            French: "string",
            Italian: "string",
            Japanese: "string",
            Korean: "string",
            Spanish: "string"
          }
        },
        pokemonClass: "POKEMON_CLASS_LEGENDARY",
        quickMoves: {
          property1: {
            id: "string",
            power: 0,
            energy: 0,
            durationMs: 0,
            type: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            combat: {
              energy: 0,
              power: 0,
              turns: 0,
              buffs: {
                activationChance: 0,
                attackerAttackStatsChange: 0,
                attackerDefenseStatsChange: 0,
                targetAttackStatsChange: 0,
                targetDefenseStatsChange: 0
              }
            }
          },
          property2: {
            id: "string",
            power: 0,
            energy: 0,
            durationMs: 0,
            type: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            combat: {
              energy: 0,
              power: 0,
              turns: 0,
              buffs: {
                activationChance: 0,
                attackerAttackStatsChange: 0,
                attackerDefenseStatsChange: 0,
                targetAttackStatsChange: 0,
                targetDefenseStatsChange: 0
              }
            }
          }
        },
        cinematicMoves: {
          property1: {
            id: "string",
            power: 0,
            energy: 0,
            durationMs: 0,
            type: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            combat: {
              energy: 0,
              power: 0,
              turns: 0,
              buffs: {
                activationChance: 0,
                attackerAttackStatsChange: 0,
                attackerDefenseStatsChange: 0,
                targetAttackStatsChange: 0,
                targetDefenseStatsChange: 0
              }
            }
          },
          property2: {
            id: "string",
            power: 0,
            energy: 0,
            durationMs: 0,
            type: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            combat: {
              energy: 0,
              power: 0,
              turns: 0,
              buffs: {
                activationChance: 0,
                attackerAttackStatsChange: 0,
                attackerDefenseStatsChange: 0,
                targetAttackStatsChange: 0,
                targetDefenseStatsChange: 0
              }
            }
          }
        },
        eliteQuickMoves: {
          property1: {
            id: "string",
            power: 0,
            energy: 0,
            durationMs: 0,
            type: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            combat: {
              energy: 0,
              power: 0,
              turns: 0,
              buffs: {
                activationChance: 0,
                attackerAttackStatsChange: 0,
                attackerDefenseStatsChange: 0,
                targetAttackStatsChange: 0,
                targetDefenseStatsChange: 0
              }
            }
          },
          property2: {
            id: "string",
            power: 0,
            energy: 0,
            durationMs: 0,
            type: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            combat: {
              energy: 0,
              power: 0,
              turns: 0,
              buffs: {
                activationChance: 0,
                attackerAttackStatsChange: 0,
                attackerDefenseStatsChange: 0,
                targetAttackStatsChange: 0,
                targetDefenseStatsChange: 0
              }
            }
          }
        },
        eliteCinematicMoves: {
          property1: {
            id: "string",
            power: 0,
            energy: 0,
            durationMs: 0,
            type: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            combat: {
              energy: 0,
              power: 0,
              turns: 0,
              buffs: {
                activationChance: 0,
                attackerAttackStatsChange: 0,
                attackerDefenseStatsChange: 0,
                targetAttackStatsChange: 0,
                targetDefenseStatsChange: 0
              }
            }
          },
          property2: {
            id: "string",
            power: 0,
            energy: 0,
            durationMs: 0,
            type: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            combat: {
              energy: 0,
              power: 0,
              turns: 0,
              buffs: {
                activationChance: 0,
                attackerAttackStatsChange: 0,
                attackerDefenseStatsChange: 0,
                targetAttackStatsChange: 0,
                targetDefenseStatsChange: 0
              }
            }
          }
        },
        assets: {
          image: "http://example.com",
          shinyImage: "http://example.com"
        },
        assetForms: [
          {
            image: "http://example.com",
            shinyImage: "http://example.com",
            form: "string",
            costume: "string",
            isFemale: true
          }
        ],
        regionForms: {
          property1: {
            id: "string",
            formId: "string",
            dexNr: 0,
            generation: 0,
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            stats: {
              stamina: 0,
              attack: 0,
              defense: 0
            },
            primaryType: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            secondaryType: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            pokemonClass: "POKEMON_CLASS_LEGENDARY",
            quickMoves: {
              property1: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              },
              property2: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              }
            },
            cinematicMoves: {
              property1: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              },
              property2: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              }
            },
            eliteQuickMoves: {
              property1: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              },
              property2: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              }
            },
            eliteCinematicMoves: {
              property1: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              },
              property2: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              }
            },
            assets: {
              image: "http://example.com",
              shinyImage: "http://example.com"
            },
            regionForms: {
              property1: {},
              property2: {}
            },
            evolutions: [
              {
                id: "string",
                formId: "string",
                candies: 0,
                item: {
                  id: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                quests: [
                  {
                    id: "string",
                    type: "string",
                    names: {
                      English: "string",
                      German: "string",
                      French: "string",
                      Italian: "string",
                      Japanese: "string",
                      Korean: "string",
                      Spanish: "string"
                    }
                  }
                ]
              }
            ],
            hasMegaEvolution: true,
            megaEvolutions: {
              property1: {
                id: "string",
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                stats: {
                  stamina: 0,
                  attack: 0,
                  defense: 0
                },
                primaryType: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                secondaryType: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                assets: {
                  image: "http://example.com",
                  shinyImage: "http://example.com"
                }
              },
              property2: {
                id: "string",
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                stats: {
                  stamina: 0,
                  attack: 0,
                  defense: 0
                },
                primaryType: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                secondaryType: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                assets: {
                  image: "http://example.com",
                  shinyImage: "http://example.com"
                }
              }
            }
          },
          property2: {
            id: "string",
            formId: "string",
            dexNr: 0,
            generation: 0,
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            stats: {
              stamina: 0,
              attack: 0,
              defense: 0
            },
            primaryType: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            secondaryType: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            pokemonClass: "POKEMON_CLASS_LEGENDARY",
            quickMoves: {
              property1: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              },
              property2: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              }
            },
            cinematicMoves: {
              property1: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              },
              property2: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              }
            },
            eliteQuickMoves: {
              property1: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              },
              property2: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              }
            },
            eliteCinematicMoves: {
              property1: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              },
              property2: {
                id: "string",
                power: 0,
                energy: 0,
                durationMs: 0,
                type: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                combat: {
                  energy: 0,
                  power: 0,
                  turns: 0,
                  buffs: {
                    activationChance: 0,
                    attackerAttackStatsChange: 0,
                    attackerDefenseStatsChange: 0,
                    targetAttackStatsChange: 0,
                    targetDefenseStatsChange: 0
                  }
                }
              }
            },
            assets: {
              image: "http://example.com",
              shinyImage: "http://example.com"
            },
            regionForms: {
              property1: {},
              property2: {}
            },
            evolutions: [
              {
                id: "string",
                formId: "string",
                candies: 0,
                item: {
                  id: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                quests: [
                  {
                    id: "string",
                    type: "string",
                    names: {
                      English: "string",
                      German: "string",
                      French: "string",
                      Italian: "string",
                      Japanese: "string",
                      Korean: "string",
                      Spanish: "string"
                    }
                  }
                ]
              }
            ],
            hasMegaEvolution: true,
            megaEvolutions: {
              property1: {
                id: "string",
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                stats: {
                  stamina: 0,
                  attack: 0,
                  defense: 0
                },
                primaryType: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                secondaryType: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                assets: {
                  image: "http://example.com",
                  shinyImage: "http://example.com"
                }
              },
              property2: {
                id: "string",
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                },
                stats: {
                  stamina: 0,
                  attack: 0,
                  defense: 0
                },
                primaryType: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                secondaryType: {
                  type: "string",
                  names: {
                    English: "string",
                    German: "string",
                    French: "string",
                    Italian: "string",
                    Japanese: "string",
                    Korean: "string",
                    Spanish: "string"
                  }
                },
                assets: {
                  image: "http://example.com",
                  shinyImage: "http://example.com"
                }
              }
            }
          }
        },
        evolutions: [
          {
            id: "string",
            formId: "string",
            candies: 0,
            item: {
              id: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            quests: [
              {
                id: "string",
                type: "string",
                names: {
                  English: "string",
                  German: "string",
                  French: "string",
                  Italian: "string",
                  Japanese: "string",
                  Korean: "string",
                  Spanish: "string"
                }
              }
            ]
          }
        ],
        hasMegaEvolution: true,
        megaEvolutions: {
          property1: {
            id: "string",
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            stats: {
              stamina: 0,
              attack: 0,
              defense: 0
            },
            primaryType: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            secondaryType: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            assets: {
              image: "http://example.com",
              shinyImage: "http://example.com"
            }
          },
          property2: {
            id: "string",
            names: {
              English: "string",
              German: "string",
              French: "string",
              Italian: "string",
              Japanese: "string",
              Korean: "string",
              Spanish: "string"
            },
            stats: {
              stamina: 0,
              attack: 0,
              defense: 0
            },
            primaryType: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            secondaryType: {
              type: "string",
              names: {
                English: "string",
                German: "string",
                French: "string",
                Italian: "string",
                Japanese: "string",
                Korean: "string",
                Spanish: "string"
              }
            },
            assets: {
              image: "http://example.com",
              shinyImage: "http://example.com"
            }
          }
        }
      }
