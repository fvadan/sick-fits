import gql from 'graphql-tag';

import { perPage } from '../config';

export const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY(
		$skip: Int = 0
		$first: Int = ${ perPage }
	) {
        items(
			orderBy: createdAt_DESC
			skip: $skip
			first: $first 
		) {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;

export const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ) {
        createItem(
            title: $title
            description: $description
            price: $price
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`;

export const UPDATE_ITEM_MUTATION = gql`
    mutation UPDATE_ITEM_MUTATION(
        $id: ID!
        $title: String
        $description: String
        $price: Int
    ) {
        updateItem(
            id: $id
            title: $title
            description: $description
            price: $price
        ) {
            id
            title
            description
            price
        }
    }
`;

export const ITEM_QUERY = gql`
    query ITEM_QUERY(
        $id: ID!
    ) {
        item(where: {
            id: $id
        }) {
            id
            title
            description
            price
            largeImage
        }
    }
`;

export const DELETE_ITEM_MUTATION = gql`
    mutation DELETE_ITEM_MUTATION(
        $id: ID!
    ) {
        deleteItem(
            id: $id
        ) {
            id
        }
    }
`;

export const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
    	itemsConnection {
    		aggregate {
    			count
    		}
    	}
    }
`;

export const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION(
        $email: String!
        $name: String!
        $password: String!
    ) {
        signup(
        	email: $email
        	name: $name
            password: $password
        ) {
            id
            email
            name
        }
    }
`;

export const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION(
		$email: String!
		$password: String!
    ) {
        signin(
            email: $email
            password: $password
        ) {
            id
            email
            name
        }
    }
`;

export const CURRENT_USER_QUERY = gql`
	query CURRENT_USER_QUERY {
		currentUser {
			id
            email
            name
            permissions
		}
	}
`;

export const SIGNOUT_MUTATION = gql`
	mutation SIGNOUT_MUTATION {
		signout {
			message
		}
	}
`;

export const RESET_PASSWORD_MUTATION = gql`
	mutation RESET_PASSWORD_MUTATION(
    	$password: String!
		$confirmPassword: String!
		$resetToken: String! 
    ) {
		resetPassword(
			password: $password
			confirmPassword: $confirmPassword
			resetToken: $resetToken
		) {
			id
			email
			name
		}
	}
`;

export const REQUEST_RESET_MUTATION = gql`
	mutation REQUEST_RESET_MUTATION(
		$email: String!
	) {
        requestReset(
			email: $email
		) {
			message
		}
	}
`;

export const ALL_USERS_QUERY = gql`
	query ALL_USERS_QUERY {
		users {
			id
			name
			email
			permissions
		}
	}
`;

export const UPDATE_PERMISSIONS_MUTATION = gql`
	mutation UPDATE_PERMISSIONS_MUTATION (
		$permissions: [Permission]
		$userId: ID!
	) {
		updatePermissions(
			permissions: $permissions
			userId: $userId
		) {
			id
			name
			email
			permissions
		}
	}
`;