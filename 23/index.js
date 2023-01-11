function executeCommands(commands) {
  const cpu = [0, 0, 0, 0, 0, 0, 0, 0];

  const cmd = {
    MOV: (x) => {
      let mov = x.split(",")[0].split(" ")[1];
      cpu[+x.at(-1)] = cpu[+mov.at(-1)] * +mov.startsWith("V") + ~~mov;
    },
    ADD: (x) => {
      let v1 = +x.split(",")[0].at(-1);
      let v2 = +x.split(",")[1].at(-1);
      cpu[v1] = (cpu[v1] + cpu[v2]) % 256;
    },
    INC: (x) => {
      cpu[+x.at(-1)] = (cpu[+x.at(-1)] + 1) % 256;
    },
    DEC: (x) => {
      cpu[+x.at(-1)] = (((cpu[+x.at(-1)] - 1) % 256) + 256) % 256;
    },
    JMP: (x) => {
      commands = commands.concat(
        commands.slice(
          +x.split(" ").at(-1),
          (commands.indexOf(x) + 1) * !!cpu[0]
        )
      );
    },
  };

  for (let i = 0; i < commands.length; i++) {
    cmd[commands[i].split(" ")[0]](commands[i]);
  }

  return cpu;
}

function executeCommands(commands) {
  let state = [0, 0, 0, 0, 0, 0, 0, 0];
  function calculateNextState(state, action, argts, index) {
    let newState = [...state];
    switch (action) {
      case "MOV": {
        const [arg1, arg2] = argts.split(",");
        if (arg1.includes("V")) {
          const index1 = Number(arg1.at(-1));
          const index2 = Number(arg2.at(-1));
          newState[index2] = newState[index1];
        } else {
          const index1 = Number(arg2.at(-1));
          newState[index1] = Number(arg1);
        }
        return newState;
      }
      case "ADD": {
        const [arg1, arg2] = argts.split(",");
        const index1 = Number(arg1.at(-1));
        const index2 = Number(arg2.at(-1));
        if (newState[index1] + newState[index2] > 255) {
          newState[index1] = newState[index1] + newState[index2] - 256;
        } else {
          newState[index1] += newState[index2];
        }
        return newState;
      }
      case "DEC": {
        const index1 = Number(argts.at(-1));
        if (newState[index1] - 1 < 0) {
          newState[index1] = 255;
        } else {
          newState[index1]--;
        }
        return newState;
      }
      case "INC": {
        const index1 = Number(argts.at(-1));
        if (newState[index1] + 1 > 255) {
          newState[index1] = 0;
        } else {
          newState[index1]++;
        }
        return newState;
      }
      case "JMP": {
        const loopCommands = commands.slice(Number(argts), index);
        while (newState[0] > 0) {
          loopCommands.forEach((command) => {
            const [action, args] = command.split(" ");
            newState = calculateNextState(newState, action, args);
          });
        }
        return newState;
      }
    }
  }

  commands.forEach((command, index) => {
    const [action, args] = command.split(" ");
    state = calculateNextState(state, action, args, index);
  });
  return state;
}
