import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from '../styles/pages/Learderboard.module.css'

import { Layout } from "../components/Layout"
import { rmdirSync } from 'fs'


export default function Learderboard() {
  const users = [
    {
      position: 1,
      user: "Jefferson",
      user_level: 59,
      user_avatar: "https://github.com/jeffersondossantosaguiar.png",
      challenges: 130,
      exp: 159000
    }
  ]

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Learderboard</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>POSIÇÃO</TableCell>
                <TableCell align="left">USUÁRIO</TableCell>
                <TableCell align="left">DESAFIOS</TableCell>
                <TableCell align="left">EXPERIÊNCIA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow key={row.user}>
                  <TableCell component="th" scope="row">
                    {row.position}
                  </TableCell>
                  <TableCell align="left">{row.user} Level {row.user_level}</TableCell>
                  <TableCell align="left">{row.challenges} completados</TableCell>
                  <TableCell align="left">{row.exp} xp</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
    </Layout>
  )
}