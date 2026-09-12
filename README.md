Q1:What is JSX, and why is it used in React?
Ans:
JSX (JavaScript XML) is a syntax that lets us write HTML-like code inside JavaScript.
It is used in React to create UI components more easily and make code more readable.

Q2:What is the difference between props and state?
Ans:  
Props: Data passed from a parent component to a child. They are read-only.
State: Data managed inside a component. It can change over time.

Q3:What does the useState hook do, and where did you use it in this project?
Ans:
useState is a React Hook used to store and update data (state) inside a component.
Syntax:const [count, setCount] = useState(0);

Q4:What does the useEffect hook do, and why did you need it to load the JSON data?
Ans:
We use it to fetch/load JSON data when the component loads

Q5:Why does every item in a .map() list need a unique key prop?
Ans:
A unique key helps React identify each list item efficiently and know which items were added, removed, or changed.

Q6:What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: 
Conditional rendering means showing different UI based on a condition.

Q7:How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans:
Parent → Child: Pass data using props.
Child → Parent: Pass a callback function as a prop, then the child calls it.