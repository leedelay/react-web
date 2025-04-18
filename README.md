# React + Vite

# startup Project
1. terminal 輸入執行, 安裝依賴的lib, 根據 package.json 設定執行
    > npm install
2. terminal 輸入執行, 編譯且部屬啟動本機端server, 執行成功訊息會提示 ➜ Local : http://localhost:5173/ 即是本機端測試路徑
    > npm run dev

# React Note
--------------------------------------------- 初始化建立 react 專案 ---------------------------------------------
	1. 新增資料夾 ex: /react-web
	2. vscode 開啟資料夾目錄 react-web
	3. vscode 開啟 terminal, terminal切換目錄至上一層(因為等等要透過vite直接建立初始內容在 react-web 中)
	4. terminal 執行 vite 建立命令, 若無 vite 自行安裝 
		> npm create vite@latest react-web -- --template react
	5. 切換 terminal 目錄進入 react-web 並執行安裝更新依賴
		> cd my-react-app
		> npm install
	6. 啟動專案
		> npm run dev
		執行成功訊息會提示 ➜ Local : http://localhost:5173 即是本機端測試路徑
		測試修改 App.jsx 內容應該會即刻生效
	7.(optional) 打包成靜態網站
		> npm run build
		這會在專案根目錄下生成一個 dist/ 資料夾，裡面就是可以直接部署的靜態網站內容。
		"理論上"dist內容可以直接執行開啟, 但"不建議"!, 並且開啟也只會看到空白頁, 因為瀏覽器對 file:// 協定有嚴格限制，不允許從本地磁碟載入這些模組，會導致錯誤。
	8.(optional) 如果你要部署在子目錄（例如 GitHub Pages 上的 /my-react-app/），需要修改 vite.config.js
		// vite.config.js
		export default {
		  base: '/my-react-app/', // 👈 改這裡
		};
		然後再重新打包一次！	

--------------------------------------------- 檔案結構 ---------------------------------------------		
	🏠 React 專案首頁組成（用 Vite）
	react-web/
	├── index.html        👈 HTML 首頁樣板（真正的首頁檔）
	├── src/
	│   ├── main.jsx      👈 JavaScript 進入點（JS 主程式）
	│   └── App.jsx       👈 React App 的根元件

--------------------------------------------- Why immutability is important ---------------------------------------------	
	https://react.dev/learn/tutorial-tic-tac-toe#overview
	搜尋 -> Why immutability is important
	By default, all child components re-render automatically when the state of a parent component changes. 
	This includes even the child components that weren’t affected by the change. 
	Although re-rendering is not by itself noticeable to the user (you shouldn’t actively try to avoid it!), 
	you might want to skip re-rendering a part of the tree that clearly wasn’t affected by it for performance reasons. 
	Immutability makes it very cheap for components to compare whether their data has changed or not. 
	You can learn more about how React chooses when to re-render a component in the memo API reference.
	https://react.dev/reference/react/memo

--------------------------------------------- XXXX ---------------------------------------------
--------------------------------------------- XXXX ---------------------------------------------
--------------------------------------------- XXXX ---------------------------------------------
--------------------------------------------- XXXX ---------------------------------------------
--------------------------------------------- XXXX ---------------------------------------------