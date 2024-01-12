import { BrowserRouter, Routes, Route }
    from "react-router-dom";

import EmojiRandomButton from "./EmojiRandomButton";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/emoji" element={<EmojiRandomButton />} />
                    <Route path="/Page1" element={<Page1 />} />
                    <Route path="/Page2" element={<Page2 />} />
                    <Route path="/Page3" element={<Page3 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
