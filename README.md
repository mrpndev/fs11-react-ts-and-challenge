# Challenge: Build a Reusable Product Catalog

**Time:** 15–20 minutes  
**Difficulty:** Intermediate

## Scenario

You're building an online store. Your application needs to display products, allow users to add products to a shopping cart, and calculate the total price.

Your goal is to use **React with TypeScript**, including typed props, typed state, generics, and reusable components.

## Requirements

### 1. Create a Product Type

Define a `Product` type with the following properties:

- `id` — number
- `name` — string
- `price` — number
- `category` — string
- `inStock` — boolean

Create an array containing at least 5 products.

### 2. Create a ProductCard Component

Create a reusable `ProductCard` component that:

- Accepts a product through typed props.
- Displays the product's name, price, and category.
- Displays "Out of Stock" if `inStock` is false.
- Accepts an `onAddToCart` callback through props.
- Has an "Add to Cart" button that calls the callback with the selected product.
- Disables the button when the product is out of stock.

### 3. Implement Shopping Cart State

In your main component:

- Create a `cart` state variable using `useState`.
- Explicitly type the state as an array of products.
- Create a function that adds a selected product to the cart.
- Display the number of items currently in the cart.
- Display the total price of all items using `.reduce()`.

### 4. Create a Generic Utility Function

Create a reusable generic function called `findById`.

The function should:

- Accept an array of objects.
- Accept an ID as a number.
- Return the matching object or `undefined`.
- Work with any object type that contains a numeric `id` property.

**Hint:** Look into generic constraints using `extends`.

### 5. Use Your Generic Function

Add a button that finds and displays the product with ID `3` using your `findById` function.

## Bonus Challenge: Type Guards

Create a type guard called `isProduct` that:

- Accepts a value of type `unknown`.
- Returns `true` only if the value has all the required `Product` properties with the correct types.
- Uses the TypeScript return type `value is Product`.

Test it against a valid product and an invalid object.

## Discussion Questions

1. Why do we type the `onAddToCart` callback?
2. What's the difference between `Product` and `Product[]`?
3. Why does `findById` need a generic type?
4. What does `extends` accomplish in a generic function?
5. Why does `findById` return `T | undefined` rather than just `T`?
6. What's the difference between a type guard and a type assertion?

## Success Criteria

Your application should display products, add available products to a cart, calculate the total, and use a generic function to find products by ID.

**Rules:** No `any`, no external libraries, and no API calls. Use React, TypeScript, and the concepts covered in class.