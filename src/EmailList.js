import React from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import EmailRow from "./EmailRow";
import { useState, useEffect } from "react";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emaiList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="#c04b37" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="email-list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Twitch"
          subject="Hey Fellow streamer!!!"
          description="This is awsome mail from your friend"
          time="8pm"
        />
        <EmailRow
          title="Chase"
          subject="Your savings!!"
          description="You received a new mail from bank You received a new mail from bank  "
          time="8pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
