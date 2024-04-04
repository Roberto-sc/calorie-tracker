import { Activity } from "../types"


export type ActivityActions = 
{ type : 'save-activity',payload : { newActivity : Activity }} |
{ type : 'set-activeId',payload : { id : Activity['id'] }}  |
{ type : 'delete-activity',payload : { id : Activity['id'] }} |
{ type : 'restar-app'} 



export type ActivityState = {
    activities : Activity[],
    activeID: Activity['id']
}

const localStoraheActivities = () : Activity[] => {

    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initiaState : ActivityState = {
    activities : localStoraheActivities(),
    activeID: ''
}

export const activityreducer = (
    state : ActivityState = initiaState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        // Actializa el state

        let updatedActivities : Activity[] = []

        if(state.activeID){
            updatedActivities = state.activities.map(activity => activity.id === state.activeID ? action.payload.newActivity : activity)


        }else{
            updatedActivities =[...state.activities, action.payload.newActivity]
        }
        return{
            ...state,
            activities: updatedActivities,
            activeID : ''
        }
    }

    if(action.type === 'set-activeId'){
        return {
            ...state,
            activeID : action.payload.id
        }
    }

    if(action.type === 'delete-activity'){

        return{
            ...state,
            activities : state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }

    if(action.type === 'restar-app'){
        return{
            activities : [],
            activeID : ''
        }
    }

    return state
}