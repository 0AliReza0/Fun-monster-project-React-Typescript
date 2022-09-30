export interface State {
    monsters:Monster[],
    filteredMonsters:Monster[]
}

export interface Monster{
    id:number
    name:string
    email:string
}

export interface Props{
    monsters: Monster[]
}

export interface CardProps{
    monster: Monster
}