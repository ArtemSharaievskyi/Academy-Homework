import { useState, type FunctionComponent } from "react";

interface CounterProps {
    initialCount: number,
    min: number,
    max: number
}

const Counter: FunctionComponent<CounterProps> = ({ initialCount = 0, min = -Infinity, max = Infinity }) => {
    const [counter, setCounter] = useState<number>(initialCount);

    const increment = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }

    }
    const descrement = () => {
        if (counter > min) {
            setCounter(counter - 1)
        }

    }

    return (
        <div>
            <div data-testid="count">Count: {counter}</div>
            <button onClick={increment}>+</button>
            <button onClick={descrement}>-</button>
        </div>
    );
}

export default Counter;