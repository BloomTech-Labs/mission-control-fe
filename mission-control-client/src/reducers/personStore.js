import {
  GET_PERSONS_START,
  GET_PERSONS_SUCCESS,
  GET_PERSONS_ERROR,
  GET_PERSON_START,
  GET_PERSON_SUCCESS,
  GET_PERSON_ERROR,
  GET_PEOPLE_GROUPS_START,
  GET_PEOPLE_GROUPS_SUCCESS,
  GET_PEOPLE_GROUPS_ERROR,
  GET_PEOPLE_GROUP_START,
  GET_PEOPLE_GROUP_SUCCESS,
  GET_PEOPLE_GROUP_ERROR,
  GET_PEOPLE_GROUP_MEMBERS_START,
  GET_PEOPLE_GROUP_MEMBERS_SUCCESS,
  GET_PEOPLE_GROUP_MEMBERS_ERROR,
  GET_PEOPLE_GROUP_MEMBER_START,
  GET_PEOPLE_GROUP_MEMBER_SUCCESS,
  GET_PEOPLE_GROUP_MEMBER_ERROR,
} from "../actions";

const initialState = {
  isLoading: false,
  persons: [],
  person: {},
  error: "",
  peopleGroups: [],
  peopleGroup: {},
  peopleGroupMembers: [],
  peopleGroupMember: {},
};

export const personStore = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PERSONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        persons: action.payload,
        error: ""
      };
    case GET_PERSONS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_PERSON_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PERSON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        person: action.payload,
        error: ""
      };
    case GET_PERSON_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_PEOPLE_GROUPS_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PEOPLE_GROUPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        peopleGroups: action.payload,
        error: ""
      };
    case GET_PEOPLE_GROUPS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_PEOPLE_GROUP_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PEOPLE_GROUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        peopleGroup: action.payload,
        error: ""
      };
    case GET_PEOPLE_GROUP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_PEOPLE_GROUP_MEMBERS_START:
        return {
            ...state,
            isLoading: true
        }
    case GET_PEOPLE_GROUP_MEMBERS_SUCCESS:
        return {
            ...state,
            isLoading: false,
            peopleGroupMembers: action.payload,
            error: ""    
        }
    case GET_PEOPLE_GROUP_MEMBERS_ERROR:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    case GET_PEOPLE_GROUP_MEMBER_START:
        return {
            ...state,
            isLoading: true
        }
    case GET_PEOPLE_GROUP_MEMBER_SUCCESS:
        return {
            ...state,
            peopleGroupMember: action.payload,
            error: "" 
        }
    case GET_PEOPLE_GROUP_MEMBER_ERROR:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }                                                                                
    default:
      return state;
  }
};
