import JobsCard from "../components/JobsCard";
import { useState } from "react";
function AppliedPage() {
    const [applyarray, setApplyArray] = useState([{}])


    return (<div>
        <h1>This is from Applied</h1>
        <JobsCard ></JobsCard>
    </div>)
}
export default AppliedPage;