"use client";

import { useXTerm } from "react-xtermjs";
import { FitAddon } from "xterm-addon-fit";
import { useEffect } from "react";
import { useTheme } from "next-themes";
// import { Terminal } from "xterm";

export default function TerminalComponent() {
  //   useEffect(() => {
  //     const terminalElement = document.getElementById("terminal");

  //     if (terminalElement) {
  //       const term = new Terminal();
  //       term.open(terminalElement);
  //       term.write("test");
  //     }
  //   }, []);
  const { theme, systemTheme } = useTheme();
  const { instance, ref } = useXTerm();
  const fitAddon = new FitAddon();
  //   const [command, setCommand] = useState("");
  let command: string = "";

  useEffect(() => {
    let backgroundColor = "#fafafa";
    let foregroundColor = "#333";
    let cursorColor = "#333";

    if (theme === "system") {
      if (systemTheme === "dark") {
        backgroundColor = "#18181b";
        foregroundColor = "#fff";
        cursorColor = "#fff";
      }
    } else if (theme === "dark") {
      backgroundColor = "#18181b";
      foregroundColor = "#fff";
      cursorColor = "#fff";
    }

    if (instance?.options) {
      instance.options.theme = {
        background: backgroundColor,
        foreground: foregroundColor,
        cursor: cursorColor,
      };
    }
  }, [theme, systemTheme, instance]);

  useEffect(() => {
    // Load the fit addon
    instance?.loadAddon(fitAddon);

    // Ensure instance and options are defined before setting the theme
    if (instance?.options) {
      instance.options.cursorBlink = true;
      let backgroundColor = "#fafafa";
      let foregroundColor = "#333";
      let cursorColor = "#333";

      if (theme === "system") {
        if (systemTheme === "dark") {
          backgroundColor = "#18181b";
          foregroundColor = "#fff";
          cursorColor = "#fff";
        }
      } else if (theme === "dark") {
        backgroundColor = "#18181b";
        foregroundColor = "#fff";
        cursorColor = "#fff";
      }

      if (instance?.options) {
        instance.options.theme = {
          background: backgroundColor,
          foreground: foregroundColor,
          cursor: cursorColor,
        };
      }
    }

    const handleResize = () => fitAddon.fit();

    // Handle resize event
    window.addEventListener("resize", handleResize);

    // Enable user input: Listen for keypresses and display them
    instance?.onData((data) => {
      if (data === "\r") {
        // User pressed Enter
        instance.write("\r\n"); // Move to new line
        processCommand(command); // Handle the command
        // setCommand(""); // Clear command buffer
        command = "";
      } else if (data === "\u007f") {
        // Handle backspace
        if (command.length > 0) {
          //   setCommand(command.slice(0, -1));
          command = command.slice(0, -1);
          instance.write("\b \b"); // Erase character in terminal
        }
      } else {
        // Add character to input buffer and write to terminal
        // setCommand((prev) => prev + data);
        command += data;
        instance.write(data);
      }
    });

    // Write a custom message
    instance?.writeln("Welcome to Blurr!");

    // Fit terminal size initially
    fitAddon.fit();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, instance]);

  // ✅ Process entered commands
  function processCommand(cmd: string) {
    if (cmd.trim() === "clear") {
      instance?.clear(); // Clear terminal
    } else {
      instance?.writeln(`You entered: ${cmd}`); // Echo command
    }
  }

  return (
    // <div id="terminal" className="h-full w-full p-2"></div>
    <div
      ref={ref}
      style={{ height: "100%", width: "100%" }}
      className="p-2"
    ></div>
  );
}
