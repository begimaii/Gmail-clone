import { IconButton } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircle from "@mui/icons-material/CheckCircle";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import React from "react";
import "./Mail.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="mail-toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantOutlinedIcon className="mail-important" />
          <p>{selectedMail?.title}</p>
          <p className="mail-time">{selectedMail?.time}</p>
        </div>
        <div className="mail-message">{selectedMail?.description}</div>
      </div>
    </div>
  );
}

export default Mail;
