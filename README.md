# C-Coffee

You can play at https://ccoffee.netlify.app/

## TODO:

- [x] check re-render dei componenti
- [x] active sui link nella navbar
- [x] fare pace con text-center
- [x] ottimizzare manualmode in un unico punto di rendering
- [x] react forms
- [x] storico mosse
- [x] macchina a stati
- [x] giocatori
- [ ] "<NomeComponente>Props" per le props e "<NomeComponente>State" per l'eventuale state del componente se lo voglio fare in un unico hook
- [x] usare formcontext
- [x] componente riga fatto in css
- [ ] togliere boostrap puro
- [x] redux
- [ ] migliorare about
- [ ] inserire changelog

- destructoring delle props:
  bad practice farlo nella firma del componente, meglio fare sulla seconda riga, in modo da definire const

- render dei componenti figli se rerender del padre

- useMemo (base)
- React.memo() (avanzato)
  export const blabla = React.memo(NomeComponente, (prevProps, nextProps) => return condizionePerCuiNonRerenderizzare)

- ripassare UseCallback

- bulk setState solo da react 18 in poi
