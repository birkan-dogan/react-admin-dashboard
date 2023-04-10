import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import ModalComponent from "../../components/Modal";
import { AddBox } from "@mui/icons-material";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState([]);
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDateClick = (selected) => {
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (text) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${text}`,
        title: text,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
      setText("");
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  let w = window.innerWidth;
  const rightProperty =
    w >= 768 ? "dayGridMonth,timeGridWeek,timeGridDay,listMonth" : "";

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="17px"
        mr="28px"
      >
        <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
        <Box onClick={() => handleOpen()} className="calendar-button">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <AddBox sx={{ mr: "10px" }} /> Add New Task:
          </Button>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" className="calendar">
        {/* Calendar sidebar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: rightProperty,
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
          />
        </Box>
      </Box>
      <ModalComponent
        handleClose={handleClose}
        setText={setText}
        text={text}
        open={open}
      />
    </Box>
  );
};

export default Calendar;
