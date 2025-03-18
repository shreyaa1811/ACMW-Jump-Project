---
title: Creation of venv in VS Code
sidebar_label: venv
description: Understanding Virtual Environments and the steps to create a venv in VS Code.
---

# Introduction to Virtual Environment

Virtual environments are essential for managing Python projects efficiently, allowing you to isolate dependencies and avoid conflicts between different projects. Visual Studio Code (VS Code) provides excellent support for creating and managing virtual environments. This blog explores how you can set up a venv in VS Code.

![Python Virtual Env](/img/venv.jpg)

---

## Why use Virtual Environments
- ***Dependency Management***: Each project can have its wn set of dependencies without affecting other projects.
- ***Portability***: While virtual environments themselves are not portable, they help ensure that your project's dependencies are consistent across different environments.
- ***Efficient Development***: Easily switch between different Python versions and packages for different projects.

---

## Steps to create venv in VS Code
##### 1. Open your project folder in VS Code
- Navigate to your project directory and open it in VS Code
##### 2. Create a virtual environment
- Open the command palette by pressing ```Ctrl+Shift+P```(Windows/Linux) or ```Cmd+Shift+P```(Mac).
- Type ```Python : Create Environment``` and select it

![Step1](/img/venv1.png)

- Choose between **venv** or **Conda. For this example, select venv**.

![Step2](/img/venv2.png)

- Select the python interpreter you want to use as the base for your virtual environment.

![Step3](/img/venv3.png)


![Step4](/img/venv4.png)


##### 3. Activate the virtual environment
- Once the environment is created, VS Code will prompt you to select it for your workspace. Click **Yes**.
-  Alternatively, you can activate it manually by opening a new terminal in VS Code and typing:
   1. #On windows :
```.\.venv\Scripts\activate ```

   2. On macOS/Linux
 ```source .venv/bin/activate```

##### 4. Install dependencies
- With the virtual environment activated, you can install packages using pip:
Example:
```pip install pandas numpy```
- To keep track of installed packages, create a ```requirements.txt``` file :
```pip freeze > requirements.txt```

##### 5. Deactivate the virtual environment
 - When you're done working with the virtual environment, you can deactivate it by running:
 ```deactivate```

 ---

 ## Conclusion
 Creating a virtual environment in VS Code is straightforward and enhances your development workflow by allowing you to manage dependencies efficiently. Whether you're working on a personal project or collaborating with a team, virtual environments help ensure consistency and reduce potential conflicts between different projects.

 ---