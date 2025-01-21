"use client";

import { useXTerm } from "react-xtermjs";
import { FitAddon } from "xterm-addon-fit";
import { useEffect, useState } from "react";

export function Terminal() {
  const { instance, ref } = useXTerm();
  const fitAddon = new FitAddon();
  //   const [command, setCommand] = useState("");
  let command: string = "";

  useEffect(() => {
    // Load the fit addon
    instance?.loadAddon(fitAddon);

    // Ensure instance and options are defined before setting the theme
    if (instance?.options) {
      instance.options.cursorBlink = true;
      instance.options.theme = {
        background: "#fafafa",
        foreground: "#333",
        cursor: "#333",
      };
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
    <div
      ref={ref}
      style={{ height: "100%", width: "100%" }}
      className="p-2"
    ></div>
  );
}
