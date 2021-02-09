/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Message from 'components/Message';
import AppBar from 'components/AppBar';
import styles from './useStyles';
import { Modal } from 'components';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import { base } from '../../../config/api';
import { useParams } from 'react-router-dom';

export default function Trials(props: any) {
  const classes = styles();
  const { institute_id, event_id } = useParams();
  const [trialsList, settrialsList] = useState<any[]>([]); 
  const [activeModal, setActiveModal] = useState<any>('');
  const [currentId, setCurrentId] = useState<any>('');

  const confirmDelete = (
    <Card>
      <CardContent className={classes.content}>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <Typography
            style={{ textAlign: 'center' }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Are you sure?
          </Typography>
          <Typography
            style={{ textAlign: 'center' }}
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Do you really want to delete this Trial? This process cannot be
            undone.
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button
          className={classes.action}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setActiveModal('')}
        >
          Cancel
        </Button>
        <Button
          className={classes.action}
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => deleteTrial(currentId)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );

  const modalContent = (modalName) => {
    const modals = {
      confirmDelete,
    };
    return modals[modalName] || null;
  };

  const softRefresh = () => {
    let params = { event_id };
    base
      .get('/managedTrialsList', { params })
      .then((r) => {
        settrialsList(r.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    // let params = { event_id };
    // base
    //   .get('/managedTrialsList', { params })
    //   .then((r) => {
    //     setDataTrial(r.data);
    //   })
    //   .catch(() => {});
    softRefresh();
  }, []);

  const deleteTrial = (id) => {
    base
      .delete(`/deleteTrial/${id}`)
      .then((r) => {
        setActiveModal('');
        softRefresh();
      })
      .catch(() => {});
  };

  return (
    <div>
      <Message {...props} />
      <AppBar title="Trial list" isManager {...props} />
      <div className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography
              style={{ textAlign: 'center', width: '100%', margin: 0 }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              List of Trials
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            {/* <Button
              className={classes.action}
              
              size="small"
              color="primary"
              onClick={() => console.log()}
            >
              SETTINGS
            </Button> */}
            <Button
              className={classes.action}
              variant="contained"
              size="small"
              color="primary"
              onClick={() =>
                props.history.push(
                  `/dashboard/institute/${institute_id}/manage/event/${event_id}/trials/new`
                )
              }
            >
              NEW Trial
            </Button>
          </CardActions>
        </Card>
        {trialsList[0] && trialsList.map((content, i) => (
          <div key={`TrialList${content.id}`} className={classes.options}>
            <div className={classes.row}>
              <div style={{ display: 'flex' }}>
                <Typography
                  component={'span'}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                  color="textSecondary"
                >
                  {content.id}.&nbsp;
                </Typography>
                <Typography
                  component={'span'}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                >
                  {content.name}
                </Typography>
              </div>
              <Typography
                component={'span'}
                style={{ margin: 0 }}
                gutterBottom
                variant="body2"
                color="textSecondary"
              >
                {content.license_ido} - {content.motorcycle_plate}
              </Typography>
            </div>
            <Button
              className={classes.action}
              size="small"
              color="secondary"
              onClick={() => {
                setActiveModal('confirmDelete');
                setCurrentId(content.id);
              }}
            >
              Delete
            </Button>
          </div>
        )) || 'there is no trial'}
      </div>
      <Modal
        bodyStyle={{ margin: 'auto 20px', width: '100%' }}
        noPadding
        show={activeModal !== ''}
        onBackgroundClick={() => setActiveModal('')}
      >
        {modalContent(activeModal)}
      </Modal>
    </div>
  );
}
