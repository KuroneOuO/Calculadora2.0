import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <input type="text" value={input} readOnly style={styles.input} />
      </div>
      <div style={styles.buttons}>
        <p>
          La mano arriba, cintura sola Da media vuelta, danza kuduro No te canse
          ahora, que esto solo empieza Mueve la cabeza, danza kuduro
        </p>
        <button onClick={() => handleClick("7")} style={styles.button}>
          7
        </button>
        <button onClick={() => handleClick("8")} style={styles.button}>
          8
        </button>
        <button onClick={() => handleClick("9")} style={styles.button}>
          9
        </button>
        <button onClick={() => handleClick("/")} style={styles.button}>
          /
        </button>

        <button onClick={() => handleClick("4")} style={styles.button}>
          4
        </button>
        <button onClick={() => handleClick("5")} style={styles.button}>
          5
        </button>
        <button onClick={() => handleClick("6")} style={styles.button}>
          6
        </button>
        <button onClick={() => handleClick("*")} style={styles.button}>
          *
        </button>

        <button onClick={() => handleClick("1")} style={styles.button}>
          1
        </button>
        <button onClick={() => handleClick("2")} style={styles.button}>
          2
        </button>
        <button onClick={() => handleClick("3")} style={styles.button}>
          3
        </button>
        <button onClick={() => handleClick("-")} style={styles.button}>
          -
        </button>

        <button onClick={() => handleClick("0")} style={styles.button}>
          0
        </button>
        <button onClick={() => handleClick(".")} style={styles.button}>
          .
        </button>
        <button onClick={handleEqual} style={styles.button}>
          =
        </button>
        <button onClick={() => handleClick("+")} style={styles.button}>
          +
        </button>

        <button onClick={handleClear} style={styles.clearButton}>
          C
        </button>
      </div>
    </div>
  );
};

const styles = {
  calculator: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "300px",
    margin: "auto",
    marginTop: "50px",
  },
  display: {
    marginBottom: "20px",
    width: "100%",
    padding: "10px",
    textAlign: "right",
  },
  input: {
    width: "100%",
    fontSize: "2em",
    padding: "10px",
    border: "2px solid #ddd",
    borderRadius: "5px",
    textAlign: "right",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "10px",
    width: "100%",
  },
  button: {
    fontSize: "1.5em",
    padding: "20px",
    border: "none",
    backgroundColor: "#f1f1f1",
    borderRadius: "5px",
    cursor: "pointer",
  },
  clearButton: {
    fontSize: "1.5em",
    padding: "20px",
    border: "none",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
